use std::thread;

use tauri::{Emitter, Window};
#[tauri::command]
pub fn test(window: Window) {
    thread::spawn(move || loop {
        window.emit("test", Some("Hello from Rust!")).unwrap();
        thread::sleep(std::time::Duration::from_secs(1));
    });
}
#[tauri::command]
pub fn get_os()->String{
  let platform = tauri_plugin_os::platform();
  return platform.to_string();
}