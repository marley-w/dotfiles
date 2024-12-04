#!/bin/bash
# Update package database and upgrade existing packages
sudo pacman -Syu

# Drivers
sudo pacman -S lib32-pipewire \
  vulkan-validation-layers lib32-vulkan-validation-layers vulkan-headers \
  vulkan-extra-layers mesa lib32-mesa vulkan-mesa-layers lib32-vulkan-mesa-layers \
  vulkan-radeon lib32-vulkan-radeon libva lib32-libva libva-mesa-driver \
  lib32-libva-mesa-driver mesa-utils linux-zen-headers lib32-pipewire gtk-layer-shell

# Applications
sudo pacman -S steam wine ttf-meslo-nerd neovim kitty

# Desktop
sudo pacman -S hyprland xdg-desktop-portal-hyprland nwg-look \
  polkit-gnome blueberry 

# Utilities
sudo pacman -S bluez bluez-utils gamemode lib32-gamemode mangohud lib32-mangohud \
  gstreamer lib32-gstreamer modemmanager git cpupower

