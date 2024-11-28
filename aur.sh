#!/bin/bash

# Create the 'aur' directory and navigate into it
mkdir -p ~/aur
cd ~/aur

# Clone the specified AUR repositories
git clone https://aur.archlinux.org/xone-dongle-firmware.git
git clone https://aur.archlinux.org/papirus-folders.git
git clone https://aur.archlinux.org/libuvc.git
git clone https://aur.archlinux.org/xpadneo-dkms.git
git clone https://aur.archlinux.org/ttf-ms-fonts.git
git clone https://aur.archlinux.org/obs-vaapi.git

# Clone libcava repository (likely a standalone package, no dependencies)
git clone https://aur.archlinux.org/libcava.git

# Clone the core libastal package (libastal-git)
git clone https://aur.archlinux.org/libastal-git.git

# Clone the core libastal packages first (dependencies for others)
git clone https://aur.archlinux.org/libastal-io-git.git

# Clone libastal-4-git (before libastal-lua-git)
git clone https://aur.archlinux.org/libastal-4-git.git

# Clone libastal-meta-git (now in the core section)
git clone https://aur.archlinux.org/libastal-meta-git.git




# Clone additional supporting libastal packages
git clone https://aur.archlinux.org/libastal-cava-git.git
git clone https://aur.archlinux.org/libastal-network-git.git
git clone https://aur.archlinux.org/libastal-wireplumber-git.git
git clone https://aur.archlinux.org/libastal-powerprofiles-git.git
git clone https://aur.archlinux.org/libastal-bluetooth-git.git
git clone https://aur.archlinux.org/libastal-hyprland-git.git
git clone https://aur.archlinux.org/libastal-mpris-git.git
git clone https://aur.archlinux.org/libastal-notifd-git.git
git clone https://aur.archlinux.org/libastal-tray-git.git
git clone https://aur.archlinux.org/libastal-battery-git.git
git clone https://aur.archlinux.org/libastal-apps-git.git
git clone https://aur.archlinux.org/libastal-lua-git.git
git clone https://aur.archlinux.org/libastal-auth-git.git
git clone https://aur.archlinux.org/libastal-river-git.git
git clone https://aur.archlinux.org/libastal-gjs-git.git
git clone https://aur.archlinux.org/libastal-greetd-git.git

# Clone AGS repository (this might depend on other libastal packages)
git clone https://aur.archlinux.org/aylurs-gtk-shell.git

# Build and install packages using makepkg -si
cd ~/aur/xone-dongle-firmware && makepkg -si && cd ..
cd ~/aur/papirus-folders && makepkg -si && cd ..
cd ~/aur/libuvc && makepkg -si && cd ..
cd ~/aur/xpadneo-dkms && makepkg -si && cd ..
cd ~/aur/ttf-ms-fonts && makepkg -si && cd ..
cd ~/aur/obs-vaapi && makepkg -si && cd ..

echo "All AUR packages have been built and installed successfully!"

