// netlify/functions/create-checkout-session.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event, context) {
  try {
    const { line_items } = JSON.parse(event.body);

    // Map SKUs from your HTML cart to Stripe Price IDs
    const priceMap = {
      "mug-001-standard": "prod_SrVCF3miKWtn24",   // replace with your Price IDs
      "bowl-002-standard": "prod_SrVCF3miKWtn24"
    };

    const stripeLineItems = line_items.map(item => ({
      price: priceMap[item.sku],
      quantity: item.quantity
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: stripeLineItems,
      success_url: "https://YOURDOMAIN.com/success",
      cancel_url: "https://YOURDOMAIN.com/cancel",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}