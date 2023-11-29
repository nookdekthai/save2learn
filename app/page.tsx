
import Home from "./components/HomeNew/Home";


export const metadata = {
  title: 'Learning-destiny เรียนดูดวง โหราศาสตร์',
  description: 'เรียนออนไลน์ e-learning ebook โหราศาสตร์ ดูดวง ฮวงจุ้ย และจิตวิทยา สำหรับการพัฒนาชีวิตให้ดีขึ้น',
  keywords : 'โหราศาสตร์ , ดูดวง , ดูฮวงจุ้ย, จิตวิทยา สำหรับการพัฒนาชีวิตให้ดีขึ้น',
  openGraph: {
    title: 'Learning-destiny เรียนดูดวง โหราศาสตร์',
    description: 'เรียนออนไลน์ e-learning ebook โหราศาสตร์ ดูดวง ฮวงจุ้ย และจิตวิทยา สำหรับการพัฒนาชีวิตให้ดีขึ้น',
    url: 'https://www.learning-destiny.com',
    
    siteName: 'Learning-destiny',
    images: [
      {
        url: 'https://png.pngtree.com/png-clipart/20210803/ourlarge/pngtree-abstract-colorful-astrology-starry-background-png-image_3768710.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'th-TH',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Learning-destiny เรียนดูดวง โหราศาสตร์',
    description: 'เรียนออนไลน์ e-learning ebook โหราศาสตร์ ดูดวง ฮวงจุ้ย และจิตวิทยา สำหรับการพัฒนาชีวิตให้ดีขึ้น',
    images: ['https://png.pngtree.com/png-clipart/20210803/ourlarge/pngtree-abstract-colorful-astrology-starry-background-png-image_3768710.jpg'],
  },
}


export const revalidate = 180

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log('porcess env =>',process.env.NEXT_PUBLIC_SERVER_URI);
  
  const pmBanner = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`, {})
  const pmCategory = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`, {})
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory])
  const banner = await resBanner.json()
  const category = await resCategory.json()


  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || []
  }

  return (
    <Home webInfo={webInfo} />
  );
};

export default Page;
