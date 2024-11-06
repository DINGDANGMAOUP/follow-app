'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.log('error', error);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}