// Create the clock label widget
const clock = Widget.Label({
    label: '00:00:00',  // Initial time placeholder
});

// Update the clock label every second
const updateClock = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();  // Get current time in format "HH:MM:SS"
    clock.label = time;
};

updateClock();  // Set initial time
setInterval(updateClock, 1000);  // Update the clock every second

// Create the window for the clock widget
const clockWindow = Widget.Window({
    name: 'clock-window',
    anchor: ['bottom', 'left'],  // Anchoring to bottom-left
    exclusivity: 'normal',
    keymode: 'on-demand',
    layer: 'bottom',
    margins: [150, 150, 150, 150], // Adjust bottom-left margin to move it to the bottom-left
    monitor: 0,  // Use primary monitor
    child: clock, // The clock widget
     
});

// Resize the window (optional)
clockWindow.set_size_request(150, 150); // Adjust the size of the clock window

App.config({
    style: "/home/marley/.config/ags/clock/style.css", // Path to the style.css
    icons: "./assets",
    windows: [
        // Array<Gtk.Window>
    ],
    gtkTheme: "adw-gtk3-dark",
    cursorTheme: "catppuccin-mocha-dark-cursors",
    iconTheme: "Papirus",
    closeWindowDelay: {
        "window-name": 500, // milliseconds
    },
    onConfigParsed: function() {
        // code that runs after this object is loaded
    },
    onWindowToggled: function (windowName, visible) {
        print(`${windowName} is ${visible}`)
    },
});

