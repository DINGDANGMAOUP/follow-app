import { invoke } from '@tauri-apps/api/core';


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    console.log(searchParams);
    const os = await invoke('get_os')
    return Response.json({ os });
  } catch (error) {
    console.error(error);
    return Response.error();
  }
}
