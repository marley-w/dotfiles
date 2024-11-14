#!/bin/bash

# Clone the dotfiles repository
git clone https://github.com/marley-w/dotfiles.git
cd dotfiles

# Copy specified directories into ~/.config without sudo
cp -r ags hypr nvim MangoHud ~/.config

# Copy Pictures into the home directory
sudo cp -r Pictures ~/

# Copy cpupower to /etc/default
sudo cp cpupower /etc/default/

# Copy pacman.conf to /etc
sudo cp pacman.conf /etc/

echo "Dotfiles setup is complete!"

