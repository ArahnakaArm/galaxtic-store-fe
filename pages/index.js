import Head from 'next/head'
import styles from '../styles/common/index.module.css'
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addUser } from "../redux/actions/userProfileActions";
import Topbar from '../components/topbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import "react-multi-carousel/lib/styles.css";
import CarouselMul from "react-multi-carousel";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [carouselBanner, setCarouselBanner] = useState([
    {
      imgUrl: 'https://i.ytimg.com/vi/RWLJDTkPg7E/maxresdefault.jpg',
      id: 1
    },
    {
      imgUrl: 'https://s.isanook.com/ga/0/ud/219/1098777/genshin_impact_update_12years.jpg',
      id: 2
    },
    {
      imgUrl: 'https://www.techoffside.com/wp-content/uploads/2021/07/Genshin-v2.0-KeyArt.jpg',
      id: 3
    }
  ])

  const [categoryItem, setCategoryItem] = useState([
    {
      id: 1,
      title: 'Cate1',
      order: 1,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 2,
      title: 'Cate2',
      order: 2,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 3,
      title: 'Cate3',
      order: 3,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 4,
      title: 'Cate4',
      order: 4,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 5,
      title: 'Cate5',
      order: 5,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 6,
      title: 'Cate6',
      order: 6,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 7,
      title: 'Cate7',
      order: 7,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 8,
      title: 'Cate8',
      order: 8,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 9,
      title: 'Cate9',
      order: 9,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 10,
      title: 'Cate10',
      order: 10,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 11,
      title: 'Cate11',
      order: 11,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 12,
      title: 'Cate12',
      order: 12,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 13,
      title: 'Cate13',
      order: 13,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 14,
      title: 'Cate14',
      order: 14,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 15,
      title: 'Cate15',
      order: 15,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 16,
      title: 'Cate16',
      order: 16,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 17,
      title: 'Cate17',
      order: 17,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 18,
      title: 'Cate18',
      order: 18,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 19,
      title: 'Cate19',
      order: 19,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    },
    {
      id: 20,
      title: 'Cate20',
      order: 20,
      imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75'
    }
  ])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 5
    }

  };


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
    return <button className="absolute before:content-['\e824']"   onClick={() => onClick()}></button>;
  };


  return (
    <div className='flex justify-center'>
      <div className='max-w-[1200px]'>
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
              return <div className='cursor-pointer' key={item.id} onClick={() => onClickCarouselBanner(item)}>
                <img src={item.imgUrl} className='lg:h-[400px] md:h-[400px] sm:h-[250px] h-[250px]' />
              </div>
            })}
            {/*  <div>
          <img src="https://i.ytimg.com/vi/RWLJDTkPg7E/maxresdefault.jpg" />

        </div>
        <div>
          <img src="https://s.isanook.com/ga/0/ud/219/1098777/genshin_impact_update_12years.jpg" />

        </div>
        <div>
          <img src="https://www.techoffside.com/wp-content/uploads/2021/07/Genshin-v2.0-KeyArt.jpg" />

        </div> */}
          </Carousel>
          <div className=' lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3 grid grid-rows-2 px-1 max-h-[300px] lg:max-h-[400px] md:max-h-[400px] sm:max-h-[400px] mt-2 lg:mt-0 md:mt-0 sm:mt-2 px-6 lg:px-0 md:px-0 sm:px-10' >
            <div className='row-span-1 pb-[2px]'>
              <img src="https://assets.beartai.com/uploads/2020/10/GIREVIEW-1.jpg" className='h-full w-full rounded' />
            </div>
            <div className='row-span-1 pt-[2px]'>
              <img src="https://assets.beartai.com/uploads/2020/10/GIREVIEW-1.jpg" className='h-full w-full rounded' />
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
              return <div key={cate.id} className={idx < 9 ? styles.categoryItem + ' lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2'
                : idx == 9 ? styles.categoryItemFirstLast + ' lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2'
                  : idx == 19 ? styles.categoryItemSecondLast + ' lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2'
                    : styles.categoryItemSecondRow + ' lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2'}>
                <div>
                  <div className='flex justify-center pl-3 pr-3 pt-3 pb-1'>
                    <img src={cate.imgUrl} />
                  </div>
                  <div className='flex justify-center'>
                    <p className='truncate'>{cate.title}</p>
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
          <div className=''>
            <div className='mx-auto max-h-[200px] lg:max-w-[1050px] md:max-w-[750px] sm:max-w-[600px] max-w-[360px]'>
              <CarouselMul
                removeArrowOnDeviceType={["tablet", "mobile"]}
                responsive={responsive}
                ssr
                customLeftArrow={<CustomRightArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                <div >Item 1
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
                <div>Item 2
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>

                <div>Item 4
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
                <div>Item 4
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
                <div>Item 4
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
                <div>Item 4
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
                <div>Item 4
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
                <div>Item 4
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
                <div>Item 4
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
                <div>Item 4
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
                <div className='flex justify-center'>Item 4
                  <img className='max-h-[200px] flex' src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1008&impolicy=quality_75' />
                </div>
              </CarouselMul>
            </div>
          </div>


        </div>

      </div>
      {/*      {}
      <div onClick={addNewUser}>
        {users.name}
      </div> */}




    </div>
  )
}
