const audio = await Service.import('audio');

// Volume indicator button
const volumeIndicator = Widget.Button({
    on_clicked: () => audio.speaker.is_muted = !audio.speaker.is_muted,
    child: Widget.Icon().hook(audio.speaker, self => {
        const vol = audio.speaker.volume * 100;
        const icon = [
            [101, 'overamplified'],
            [67, 'high'],
            [34, 'medium'],
            [1, 'low'],
            [0, 'muted'],
        ].find(([threshold]) => threshold <= vol)?.[1];

        self.icon = `audio-volume-${icon}-symbolic`;
        self.tooltip_text = `Volume ${Math.floor(vol)}%`;
    }),
});

// Create the window to contain the volume indicator
const volumeWindow = Widget.Window({
    name: 'volume-window',
    anchor: ['bottom', 'right'],  // Anchoring to bottom-right
    exclusivity: 'normal',
    keymode: 'on-demand',
    layer: 'bottom',
    margins: [0, 150, 150, 0], // Adjust right and bottom margins to move it to the right bottom
    monitor: 0,  // Use primary monitor
    child: volumeIndicator, // The volume indicator button
     
});

// Resize the window to a suitable size (adjust as needed)
volumeWindow.set_size_request(150, 150); // Set window size manually

App.config({
    style: "/home/marley/.config/ags/volume/style.css", // Path to the style.css
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


