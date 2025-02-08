import Image from "next/image";

export default function RecentPostFooter() {

    const posts = [
      { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/homePhotos/recentPost.png" },
      { title: "Change your food habit with organic food", date: "February 28, 2022", image: "/homePhotos/recentPost.png" },
      { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/homePhotos/recentPost.png" },
    ]
  
    return (
      <div className="flex flex-col">
        <h3 className="text-2xl lg:text-xl font-bold mb-8 text-csYellow">Recent Post</h3>
        {posts.map((post, index) => (
          <div key={index} className="flex items-center mb-4">
            <Image src={post.image} alt="" className="w-16 h-16 object-cover mr-4 cursor-pointer" width={80} height={80} />
            <div>
              <h4 className="font-semibold mb-1">{post.title}</h4>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  