#!/bin/bash
# Update package database and upgrade existing packages
sudo pacman -Syu

# Drivers
sudo pacman -S lib32-pipewire \
  vulkan-validation-layers lib32-vulkan-validation-layers vulkan-headers \
  vulkan-extra-layers mesa lib32-mesa vulkan-mesa-layers lib32-vulkan-mesa-layers \
  vulkan-radeon lib32-vulkan-radeon libva lib32-libva libva-mesa-driver \
  lib32-libva-mesa-driver mesa-utils

# Applications
sudo pacman -S steam wine ttf-meslo-nerd firefox neovim gnome-terminal \
  gnome-disk-utility gnome-system-monitor

# Desktop
sudo pacman -S hyprland xdg-desktop-portal-hyprland wofi nwg-look gdm \
  polkit-gnome blueberry gnome-keyring

# Utilities
sudo pacman -S bluez bluez-utils gamemode lib32-gamemode mangohud lib32-mangohud \
  gstreamer lib32-gstreamer

