export function ImageCard({ title="Title", subtitle="subtitle", imgurl }) {
  return (
    <div className="relative min-w-60 h-80">
      <img
        className="w-full h-full object-cover rounded-lg"
        src="https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1593508512255-86ab42a8e620%3Fq%3D80%26w%3D3556%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1920&q=75"
        alt=""
      />
      <div className="rounded-lg absolute top-0 left-0 text-left p-5 bg-gradient-to-b from-[#ff8a82]/80 w-full text-white">
        <h1 className="font-mono">{title}</h1>
        <h3 className="text-xs">{subtitle}</h3>
      </div>
    </div>
  );
}
