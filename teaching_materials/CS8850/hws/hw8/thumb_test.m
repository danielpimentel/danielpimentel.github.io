% ===== Code to generate a crude brain activation map using a simple =====
% ===== threshold and a correlation test.

clear all; close all; clc;
load thumb_data;

% ===== Plot reference vector =====
figure(1);
plot(mu);
title('Reference vector \mu');

% ===== Compute correlation of all pixels with reference =====
C = zeros(64,64);
E_mu = mean(mu);
for i=1:64,
    for j=1:64,
        x_ij = X(i,j,:);
        x_ij = reshape(x_ij,[],1,1);
        C(i,j) = (x_ij-mean(x_ij))' * (mu-E_mu);
    end
end

% ===== Set a threshold at 35% of maximum to produce activation map =====
th = .35 * max(max(C));
Act_Map = C>th;

% ===== Display correlation image and activation Map (in red) =====
figure(2);
imagesc(C);
axis('square');
colormap('gray');
hold on;
[j,i] = find(Act_Map);
plot(i,j,'rs');
title('Activation Map');