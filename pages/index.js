import Head from 'next/head'
import styles from '../styles/common/index.module.css'
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { addUser } from "../redux/actions/userProfileActions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import "react-multi-carousel/lib/styles.css";
import CarouselMul from "react-multi-carousel";
import apiService from '../services/apiService'
import ThreeDotLoading from '../components/loading/threedot'
import Topbar from '../components/topbar'
import Footer from '../components/footer'

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [carouselBanner, setCarouselBanner] = useState([])
  const [categoryItem, setCategoryItem] = useState([])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3
    }

  };
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    initData()
    return () => {
      controller.abort();
    };

  }, []);

  const initData = async () => {
    await getMonthlyPromotion()
    await getCategory()
    setIsLoaded(true)
  }

  const getMonthlyPromotion = async () => {
    const promotions = await apiService('GET', 'promotion/monthly-promotion')
    setCarouselBanner(promotions.resultData)
  }

  const getCategory = async () => {
    const categories = await apiService('GET', 'main-category')
    setCategoryItem(categories.resultData)
  }


  const addNewUser = () => {
    dispatch(addUser('Arm Teetawat'));
  };

  const onClickCarouselBanner = (item) => {
    console.log(item)
  }

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <div className="absolute right-0 cursor-pointer" onClick={() => onClick()}>
      <Image src="/icons/index/next.png" layout="fixed" width="28" height="28" />
    </div>;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <div className="absolute cursor-pointer" onClick={() => onClick()}>
      <Image src="/icons/index/back.png" layout="fixed" width="28" height="28" />
    </div>;
  };

  return (
    <div>
      <Topbar></Topbar>
      <div className='flex justify-center'>
        {!isLoaded && <div className='h-[80vh] flex items-center -mb-2'>
          <ThreeDotLoading ></ThreeDotLoading>
        </div>}
        {isLoaded && <div className='max-w-[1200px]'>
          <div className='grid grid-cols-3 mt-2 lg:mt-4 md:mt-4 sm:mt-4'>
            <Carousel
              className='lg:col-span-2 md:col-span-2 sm:col-span-3 col-span-3 px-1'
              showStatus={false}
              autoPlay
              dynamicHeight
              infiniteLoop
              interval={5000}
              stopOnHover={false}
              showThumbs={false}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                const defStyle = {
                  boxShadow: "1px 1px 1px black",
                  "background": "#fff",
                  borderRadius: "50%",
                  "width": "13px",
                  "height": "13px",
                  "cursor": "pointer",
                  "display": "inline-block",
                  "margin": "0 4px"
                };
                const style = isSelected
                  ? { ...defStyle, "background": "red" }
                  : { ...defStyle };
                return (
                  <li
                    style={style}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                  >
                  </li>
                );
              }}
            >
              {carouselBanner.map(item => {
                return <div className='cursor-pointer' key={item.monthly_promotion_id} onClick={() => onClickCarouselBanner(item)}>
                  <img src={item.imgae_url} className='lg:h-[400px] md:h-[400px] sm:h-[250px] h-[250px]' />
                </div>
              })}
            </Carousel>
            <div className=' lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3 grid grid-rows-2 px-1 max-h-[300px] lg:max-h-[400px] md:max-h-[400px] sm:max-h-[400px] mt-2 lg:mt-0 md:mt-0 sm:mt-2 px-6 lg:px-0 md:px-0 sm:px-10' >
              <div className='row-span-1 pb-[2px]'>
                <img src="https://as2.ftcdn.net/v2/jpg/01/64/29/09/1000_F_164290983_CjpE4hSzIftslcvM3lG7hqktjIXnBnKE.jpg" className='h-full w-full rounded' />
              </div>
              <div className='row-span-1 pt-[2px]'>
                <img src="https://static.vecteezy.com/system/resources/previews/002/038/176/non_2x/weekend-sale-banner-template-promotion-vector.jpg" className='h-full w-full rounded' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-6 mt-6 min-h-[100px]'>
            <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-3 flex justify-center mt-1 lg:mt-0 md:mt-0 sm:mt-1'>
              <div className='cursor-pointer hover:-mt-1'>
                <div className='flex justify-center'>  <div className='rounded-lg border-2 px-2 px-1 py-1 inline-block'>
                  <div className='flex items-center'>
                    <Image className='mb-0' src="/icons/index/delivery-truck.png" layout="fixed" width="45" height="45" />
                  </div>
                </div>
                </div>
                <p className='text-center'>Free Shipping*</p>
              </div>
            </div>

            <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-3 flex justify-center mt-1 lg:mt-0 md:mt-0 sm:mt-1'>
              <div className='cursor-pointer hover:-mt-1'>
                <div className='flex justify-center'>  <div className='rounded-lg border-2 px-2 px-1 py-1 inline-block'>
                  <div className='flex items-center'>
                    <Image className='mb-0' src="/icons/index/electronics.png" layout="fixed" width="45" height="45" />
                  </div>
                </div>
                </div>
                <p className='text-center'>Electronic</p>
              </div>
            </div>

            <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-3 flex justify-center mt-1 lg:mt-0 md:mt-0 sm:mt-1'>
              <div className='cursor-pointer hover:-mt-1'>
                <div className='flex justify-center'>  <div className='rounded-lg border-2 px-2 px-1 py-1 inline-block'>
                  <div className='flex items-center '>
                    <Image className='mb-0' src="/icons/index/deal.png" layout="fixed" width="45" height="45" />
                  </div>
                </div>
                </div>
                <p className='text-center'>Partner</p>
              </div>
            </div>

            <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-3 flex justify-center mt-1 lg:mt-0 md:mt-0 sm:mt-1'>
              <div className='cursor-pointer hover:-mt-1'>
                <div className='flex justify-center'>  <div className='rounded-lg border-2 px-2 px-1 py-1 inline-block'>
                  <div className='flex items-center '>
                    <Image className='mb-0' src="/icons/index/coin.png" layout="fixed" width="45" height="45" />
                  </div>
                </div>
                </div>
                <p className='text-center'>Coin Reward</p>
              </div>
            </div>

            <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-3 flex justify-center mt-1 lg:mt-0 md:mt-0 sm:mt-1'>
              <div className='cursor-pointer hover:-mt-1'>
                <div className='flex justify-center'>  <div className='rounded-lg border-2 px-2 px-1 py-1 inline-block'>
                  <div className='flex items-center '>
                    <Image className='mb-0' src="/icons/index/trending.png" layout="fixed" width="45" height="45" />
                  </div>
                </div>
                </div>
                <p className='text-center'>Trendy</p>
              </div>
            </div>


            <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-3 flex justify-center mt-1 lg:mt-0 md:mt-0 sm:mt-1'>
              <div className='cursor-pointer hover:-mt-1'>
                <div className='flex justify-center'>  <div className='rounded-lg border-2 px-2 px-1 py-1 inline-block'>
                  <div className='flex items-center '>
                    <Image className='mb-0' src="/icons/index/campaign.png" layout="fixed" width="45" height="45" />
                  </div>
                </div>
                </div>
                <p className='text-center'>Campaigns</p>
              </div>
            </div>
          </div>

          <div id='category'>
            <div id='categoryHeader' className='mt-3 lg:mt-3 md:mt-3 sm:mt-3'>
              <p className='mb-0 font-semibold'>CATEGORIES</p>
            </div>

            <div id='categoryList' className='grid grid-cols-10 mt-3 lg:mt-3 md:mt-3 sm:mt-3'>
              {categoryItem.map((cate, idx) => {
                return <div key={cate.main_category_id} className={idx < 9 ? styles.categoryItem + ' lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2'
                  : idx == 9 ? styles.categoryItemFirstLast + ' lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2'
                    : idx == 19 ? styles.categoryItemSecondLast + ' lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2'
                      : styles.categoryItemSecondRow + ' lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2'}>
                  <div>
                    <div className='flex justify-center pl-3 pr-3 pt-3 pb-1'>
                      <img className='h-[80px]' src={cate.main_category_image_url} />
                    </div>
                    <div className='flex justify-center'>
                      <p className='truncate'>{cate.main_category_name}</p>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>

          <div id='topProducts'>
            <div id='topHeader' className='mt-3 lg:mt-3 md:mt-3 sm:mt-3'>
              <p className='mb-0 font-semibold'>TOP PRODUCTS</p>
            </div>
            <div className='mt-1'>
              <div className='mx-auto xl:max-w-[1200px] lg:max-w-[1020px] md:max-w-[768px] sm:max-w-[600px] ssm:max-w-[400px] sssm:max-w-[400px]  max-w-[360px]'>
                <CarouselMul
                  draggable={false}
                  /*     removeArrowOnDeviceType={["tablet", "mobile"]} */
                  responsive={responsive}
                  ssr
                  customLeftArrow={<CustomLeftArrow />}
                  customRightArrow={<CustomRightArrow />}
                >
                  <div>Item 1
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                  <div>Item 2
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>

                  <div>Item 3
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                  <div>Item 4
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                  <div>Item 5
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                  <div>Item 6
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                  <div>Item 7
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                  <div>Item 8
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                  <div>Item 9
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                  <div>Item 10
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                  <div>Item 11
                    <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                  </div>
                </CarouselMul>
              </div>
            </div>
          </div>
        </div>}
      </div>
      <Footer></Footer>
    </div>

  )
}
