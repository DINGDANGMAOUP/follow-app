use tauri_plugin_http::reqwest;
use crate::api::common;
pub async fn get_user_info() {
    let server_url = common::SERVER_URL;
    let response = reqwest::get(&format!("{}/user", server_url)).await;
    match response {
        Ok(response) => {
            let body = response.text().await;
            match body {
                Ok(body) => {
                    println!("Response body: {}", body);
                }
                Err(e) => {
                    println!("Failed to read response body: {}", e);
                }
            }
        }
        Err(e) => {
            println!("Failed to fetch user info: {}", e);
        }
    }
}
