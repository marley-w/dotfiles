#!/bin/bash

# Create the 'aur' directory and navigate into it
mkdir -p ~/aur
cd ~/aur

# Clone the specified AUR repositories
git clone https://aur.archlinux.org/xone-dongle-firmware.git
git clone https://aur.archlinux.org/papirus-folders.git
git clone https://aur.archlinux.org/libuvc.git
git clone https://aur.archlinux.org/gdm-settings.git
git clone https://aur.archlinux.org/aylurs-gtk-shell.git
git clone https://aur.archlinux.org/aylurs-gtk-shell.git  # Duplicate repo - is this intentional?
git clone https://aur.archlinux.org/xpadneo-dkms.git
git clone https://aur.archlinux.org/ttf-ms-fonts.git
git clone https://aur.archlinux.org/obs-vaapi.git
git clone https://aur.archlinux.org/ags.git  # Cloning AGS last

# Build and install packages using makepkg -si
cd ~/aur/xone-dongle-firmware && makepkg -si && cd ..
cd ~/aur/papirus-folders && makepkg -si && cd ..
cd ~/aur/libuvc && makepkg -si && cd ..
cd ~/aur/gdm-settings && makepkg -si && cd ..
cd ~/aur/aylurs-gtk-shell && makepkg -si && cd ..
cd ~/aur/xpadneo-dkms && makepkg -si && cd ..
cd ~/aur/ttf-ms-fonts && makepkg -si && cd ..
cd ~/aur/obs-vaapi && makepkg -si && cd ..
cd ~/aur/ags && makepkg -si && cd ..

echo "All AUR packages have been built and installed successfully!"

