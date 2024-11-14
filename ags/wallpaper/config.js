const { Gtk } = imports.gi; // Import Gtk for image handling

// Create the image widget using Gtk.Image
const wallpaper = Widget.EventBox({
    child: new Gtk.Image({ file: '/home/marley/Pictures/girl.png' }), // Set image file path
});

// Create the window to contain the wallpaper widget
const wallpaperWindow = Widget.Window({
    name: 'wallpaper-window',
    exclusivity: 'normal',
    keymode: 'on-demand',
    layer: 'background',
    monitor: 0,  // Use primary monitor
    child: wallpaper, // The wallpaper widget
});

// Set the window size to cover the entire screen
wallpaperWindow.set_size_request(-1, -1); // Stretch to cover the entire screen

// Optionally, you can remove margins if needed
wallpaperWindow.margins = [0, 0, 0, 0]; // No margins, fully covering the screen

