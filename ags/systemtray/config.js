const systemtray = await Service.import('systemtray');

/** @param {import('types/service/systemtray').TrayItem} item */
const SysTrayItem = item => Widget.Button({
    child: Widget.Icon().bind('icon', item, 'icon'),
    tooltipMarkup: item.bind('tooltip_markup'),
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (_, event) => item.openMenu(event),
});

// Create the System Tray Widget
const SystemTray = () => Widget.EventBox({
    child: Widget.Box({
        children: systemtray.bind('items').as(i => i.map(SysTrayItem)),
        spacing: 5,  // Optional: Add some space between tray items
        homogeneous: true, // Make all buttons the same size to fill the box
        vertical: false,  // Arrange buttons horizontally
    }),
});

// Create the window to contain the system tray widget
const systemTrayWindow = Widget.Window({
    name: 'systemtray-window',
    anchor: ['top', 'right'],  // Anchoring to top-right
    exclusivity: 'normal',
    keymode: 'on-demand',
    layer: 'bottom',
    margins: [150, 150, 0, 0], // Adjust right margin to move it to the right, and bottom margin
    monitor: 0,  // Use primary monitor
    child: SystemTray(), // The system tray widget
     
});

// Resize the window to 50% of the original size (250x250)
systemTrayWindow.set_size_request(150, 150); // Set window size manually


App.config({
    style: "/home/marley/.config/ags/systemtray/style.css", // Path to the style.css
    icons: "./assets",
    windows: [
        // Array<Gtk.Window>
    ],
    gtkTheme: "adw-gtk-dark",
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


