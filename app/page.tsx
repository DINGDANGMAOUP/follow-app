'use client'
export default function Home() {
  return (
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        {/* <audio src={mp} controls/> */}
        <AudioPlayer tracks={tracks} />
      </div>
  );
}
