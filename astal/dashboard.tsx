import { App, Astal, Gtk, Widget } from "astal/gtk3";
import { Variable, bind } from "astal";
import Wp from "gi://AstalWp";
import Tray from "gi://AstalTray";
import Hyprland from "gi://AstalHyprland";

function Workspaces() {
    const hypr = Hyprland.get_default();

    return (
        <box
            className="Workspaces"
            horizontal
            css="background: rgba(22, 22, 22, 0); color: #ff00ff; border: 3px solid #ff00ff; border-radius: 10px; font-size: 24px;"
	    layer={1}  // Added layer={1}
heightRequest={40}
            widthRequest={200}
        >
            {bind(hypr, "workspaces").as(wss =>
                wss
                    .sort((a, b) => a.id - b.id)
                    .map(ws => (
                        <button
                            className={bind(hypr, "focusedWorkspace").as(fw =>
                                ws === fw ? "focused" : "")}
                            onClicked={() => ws.focus()}
                            hexpand
			     

                            valign={Gtk.Align.CENTER}
                            css="background: rgba(22, 22, 22, 0.5); color: #ff00ff; font-size: 24px;"  // Border applied to button
                        >
                            {ws.id}
                        </button>
                    ))
            )}
        </box>
    );
}

function SysTray() {
    const tray = Tray.get_default();

    return (
        <box
            expand
            css="background: rgba(22, 22, 22, 0); color: #ff00ff;"
	    horizontal
            layer={1}  // Keep the layer
        >
            {bind(tray, "items").as(items => {
                const isSingleItem = items.length === 1;

                return items.map(item => {
                    if (item.iconThemePath) App.add_icons(item.iconThemePath);

                    const menu = item.create_menu();

                    return (
                        <box
                            expand
                            halign={Gtk.Align.CENTER}  // Ensure the box itself is centered
                            css="background: rgba(22, 22, 22, 0);" // Full transparency for the box
                            layer={1}  // Added layer={1}
                        >
                            <button
                                tooltipMarkup={bind(item, "tooltipMarkup")}
                                onDestroy={() => menu?.destroy()}
                                onClickRelease={self => {
                                    menu?.popup_at_widget(self, Gdk.Gravity.SOUTH, Gdk.Gravity.NORTH, null);
                                }}
                                css="background: rgba(22, 22, 22, 0.5); border: 3px solid #ff00ff; border-radius: 10px; color: #ff00ff;" // 50% transparent button with border-radius
                                hexpand  // This ensures the button expands horizontally
                                widthRequest={200}  // Make the button width smaller (adjust as needed)
                                heightRequest={60}  // Adjust height to make it smaller
                                halign={Gtk.Align.CENTER} // Center the button inside the box
                            >
                                <icon gIcon={bind(item, "gicon")} />
                            </button>
                        </box>
                    );
                });
            })}
        </box>
    );
}

function Volume() {
    const speaker = Wp.get_default()?.audio.defaultSpeaker!;

    return (
        <box
            css="background: rgba(22, 22, 22, 0.5); color: #ff00ff; font-size: 24px;"  // Box background opacity set to 0.2
            vertical
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.CENTER}
             hexpand
            vexpand
            layer={1}  // Added layer={1}
        >
            <box
                className="AudioSlider"
                css="min-width: 140px; border: 3px solid #ff00ff; border-radius: 10px;" // Border radius updated
                halign={Gtk.Align.CENTER}
                valign={Gtk.Align.CENTER}
                hexpand
		 heightRequest={60} // Set heightRequest for consistency
            widthRequest={200} // Set widthRequest for consistency
                vexpand
            >
                <icon icon={bind(speaker, "volumeIcon")} css="opacity: 1;" />  {/* Set opacity for the icon */}
                <slider
                    hexpand
                    onDragged={({ value }) => (speaker.volume = value)} // Set volume on drag
                    value={bind(speaker, "volume")} // Bind the slider value to the volume
                    css="opacity: 1; color: #ff00ff;"  // Set opacity for the slider
                />
            </box>
        </box>
    );
}

function Clock() {
    const time = new Variable("");

    function updateTime() {
        const currentTime = new Date().toLocaleTimeString();
        time.set(currentTime);
    }

    setInterval(updateTime, 1000);
    updateTime();

    return (
        <box
            css="background: rgba(22, 22, 22, 0); color: #ff00ff; font-size: 30px;" // Full transparency for the box
            vertical
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.CENTER}
            heightRequest={60} // Set heightRequest for consistency
            widthRequest={200} // Set widthRequest for consistency
            hexpand
            vexpand
            layer={1}  // Added layer={1}
        >
            <label
                label={time()}
                css="font-size: 30px; background: rgba(22, 22, 22, 0.5); color: #ff00ff; border: 3px solid #ff00ff; border-radius: 10px;"  // Border applied to the label and border-radius updated
            />
        </box>
    );
}

App.start({
    main() {
        return (
            <>
                <window
                    name="workspacesBox"
                    anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT}
                    exclusivity={Astal.Exclusivity.IGNORE}
                    keymode={Astal.Keymode.ON_DEMAND}
                    application={App}
                    marginLeft={60}
                    marginTop={60}
                    layer={1}  // Added layer={1}
                    css="background: rgba(22, 22, 22, 0);"  // Full transparency for the window
                >
                    <Workspaces />
                </window>
                <window
                    name="volumeBox"
                    anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT}
                    exclusivity={Astal.Exclusivity.IGNORE}
                    keymode={Astal.Keymode.ON_DEMAND}
                    application={App}
                    marginRight={60}
                    marginBottom={60}
                    layer={1}  // Added layer={1}
                    css="background: rgba(22, 22, 22, 0);"  // Full transparency for the window
                >
                    <Volume />
                </window>
                <window
                    name="clockBox"
                    anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT}
                    exclusivity={Astal.Exclusivity.IGNORE}
                    keymode={Astal.Keymode.ON_DEMAND}
                    application={App}
                    marginRight={60}
                    marginTop={60}
                    layer={1}  // Added layer={1}
                    css="background: rgba(22, 22, 22, 0);"  // Full transparency for the window
                >
                    <Clock />
                </window>
                <window
                    name="trayBox"
                    anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT}
                    exclusivity={Astal.Exclusivity.IGNORE}
                    keymode={Astal.Keymode.ON_DEMAND}
                    application={App}
                    marginLeft={60}
                    marginBottom={60}
                    layer={1}  // Added layer={1}
                    css="background: rgba(22, 22, 22, 0);"  // Full transparency for the window
                >
                    <SysTray />
                </window>
            </>
        );
    },
});
