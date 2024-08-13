import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import BlogsFooter from "../BlogsFooter";

export default function Blogs() {
  const swiperRef = useRef(null);
  const navigate = useNavigate(); // `useNavigate` hook-u

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideTo = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleImageClick = () => {
    navigate("/blog-detail"); // İstədiyiniz URL-ə yönləndirir
  };

  const totalSlides = 12;

  return (
    <div className="blogs">
      <div className="blogsParent">
        <button>BLOG</button>
        <h1>Latest Article</h1>
        <p>
          Our blog is a resource for anyone who wants to learn more about
          insurance, from the basics to the most complex topics.
        </p>
      </div>

      <div className="rootBlogs">
        <Swiper
          className="mySwiper"
          ref={swiperRef}
          pagination={{ clickable: true }}
        >
          {[...Array(totalSlides).keys()].map((_, index) => (
            <SwiperSlide key={index}>
              <div id="swiperSlideblogs">
                <div className="blogsChild1">
               
                  <div id="blogsChild1" onClick={handleImageClick}>
                    <img src="/Image.png" alt="Image" />
                    <h2>22/06/2023</h2>
                    <h3>How do I choose the right insurance for me?</h3>
                  </div>
                  <div id="blogsChild1">
                    <img src="/Image (1).png" alt="Image1" />
                    <h2>22/06/2023</h2>
                    <h3>How much insurance do I need?</h3>
                  </div>
                  <div id="blogsChild1">
                    <img src="/Image (2).png" alt="Image1" />
                    <h2>22/06/2023</h2>
                    <h3>The latest trends in insurance</h3>
                  </div>
                </div>

                <div className="blogsChild1">
                  <div id="blogsChild1">
                    <img src="/Image (3).png" alt="Image1" />
                    <h2>22/06/2023</h2>
                    <h3>What are the benefits of having insurance?</h3>
                  </div>
                  <div id="blogsChild1">
                    <img src="/Image (4).png" alt="Image1" />
                    <h2>22/06/2023</h2>
                    <h3>How to save money on insurance</h3>
                  </div>
                  <div id="blogsChild1">
                    <img src="/Image (5).png" alt="Image1" />
                    <h2>22/06/2023</h2>
                    <h3>What is insurance?</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="blogsAside">
          <div className="flexblogs">
            <form>
              <div className="inputblogs">
                <img src="/icon.png" alt="Search Icon" className="searchIcon" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="searchInput"
                />
              </div>
            </form>
            <button className="btnblogs" type="submit">
              <img
                src="/icon.png"
                alt="Search Icon"
                className="searchButtonIcon"
              />
            </button>
          </div>
          <h2>Recent Posts</h2>
          <h3>22/06/2023</h3>
          <h4>How do I choose the right insurance for me?</h4>
          <div className="borderblogs"></div>
          <h3>22/06/2023</h3>
          <h4>What are the benefits of having insurance?</h4>
          <div className="borderblogs"></div>
          <h3>22/06/2023</h3>
          <h4>How to save money on insurance</h4>
          <div className="borderblogs"></div>
          <h4>Categories</h4>
          <div className="borderblogs"></div>
          <div className="blogsShare">
            <h2>Car insurance</h2>
            <h3>()</h3>
          </div>
          <div className="borderblogs"></div>

          <div className="blogsShare">
            <h2>Life insurance</h2>
            <h3>()</h3>
          </div>

          <div className="borderblogs"></div>
          <div className="blogsShare">
            <h2>Business insurance</h2>
            <h3>()</h3>
          </div>
          <div className="borderblogs"></div>

          <div className="blogsShare">
            <h2>Health insurance</h2>
            <h3>()</h3>
          </div>
          <div className="borderblogs"></div>
          <h1 id="blogh1">Tags</h1>
          <div className="srql">
            <h2>Car insurance</h2>
            <h3>Car accidents</h3>
            <h4>Car repairs</h4>
          </div>

          <div className="srql1">
           <h2>Car theft</h2>
           <h3>Driving laws</h3>
           <h4>Home repairs</h4>
          </div>

          <div className="srql2">
          <h2>Disability insurance</h2>
          <h2>Disability insurance</h2>
          </div>

        </div>
        
      </div>

      <div className="blogsSwper">
        <div onClick={() => handleSlideTo(0)}>
          <img src="/First.png" alt="First" />
        </div>
        <div onClick={handlePrevClick}>
          <img src="/Prev.png" alt="Prev" />
        </div>

        {[0, 1, 2].map((num) => (
          <div key={num} onClick={() => handleSlideTo(num)}>
            {num + 1}
          </div>
        ))}
        <span>...</span>
        <div onClick={() => handleSlideTo(totalSlides - 1)}>{totalSlides}</div>
        <div onClick={handleNextClick}>
          <img src="/Next.png" alt="Next" />
        </div>
        <div onClick={() => handleSlideTo(totalSlides - 1)}>
          <img src="/Last.png" alt="Last" />
        </div>
      </div>
      <div className="foter"></div>
      <BlogsFooter />
    </div>
  );
}
