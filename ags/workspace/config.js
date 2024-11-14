const hyprland = await Service.import('hyprland');

// Function to dispatch workspace commands
const dispatch = ws => hyprland.messageAsync(`dispatch workspace ${ws}`);

// Create the Workspaces Widget
const Workspaces = () => Widget.EventBox({
    onScrollUp: () => dispatch('+1'),
    onScrollDown: () => dispatch('-1'),
    child: Widget.Box({
        children: Array.from({ length: 10 }, (_, i) => Widget.Button({
            attribute: i,
            label: `${i}`,
            onClicked: () => dispatch(i),
            expand: true,  // Allow buttons to expand and fill space
        })),
        setup: self => self.hook(hyprland, () => self.children.forEach(btn => {
            btn.visible = hyprland.workspaces.some(ws => ws.id === btn.attribute);
        })),
        spacing: 5,  // Optional: Add some space between buttons
        homogeneous: true, // Make all buttons the same size to fill the box
        vertical: false,  // Arrange buttons horizontally
    }),
});

// Create the window to contain the workspaces widget
const workspacesWindow = Widget.Window({
    name: 'workspaces-window',
    anchor: ['top', 'left'],  // Anchoring to top-left
    exclusivity: 'normal',
    keymode: 'on-demand',
    layer: 'bottom',
    margins: [150, 0, 0, 150], // Adjust left margin to move it to the left, and bottom margin
    monitor: 0,  // Use primary monitor
    child: Workspaces(), // The workspaces widget
    
});

// Resize the window to 50% of the original size (250x250)
workspacesWindow.set_size_request(150, 150); // Set window size manually

App.config({
    style: "/home/marley/.config/ags/workspace/style.css", // Path to the style.css
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

