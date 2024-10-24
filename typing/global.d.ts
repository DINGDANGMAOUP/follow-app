interface Window {
  __TAURI__: {
    os: {
      platform: () => 'linux' | 'macos' | 'ios' | 'freebsd' | 'dragonfly' | 'netbsd' | 'openbsd' | 'solaris' | 'android' | 'windows'
    }
  }
}
