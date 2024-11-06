#[derive(serde::Serialize, serde::Deserialize, Clone, Debug)]
pub struct UserDto {
    avatar: String,
    username: String,
    email: String,
    sex: String,
    phone: String,
}
