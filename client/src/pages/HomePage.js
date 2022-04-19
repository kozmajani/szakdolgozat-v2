import React from "react";
import "./css/homepage.css";

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <h2>SIMPLE VIDEO CONVERTING</h2>
          <p>..for simple people</p>
        </div>
        <div className="slideshow-container">
          <div className="mySlides">
            <div className="numbertext">1 / 4</div>
            <img src="slider1.jpg" alt="converting" style={{ width: "100%" }} />
            <div className="text">Converter</div>
          </div>

          <div className="mySlides">
            <div className="numbertext">2 / 4</div>
            <img src="slider2.jpg" alt="author" style={{ width: "100%" }} />
            <div className="text">About</div>
          </div>

          <div className="mySlides">
            <div className="numbertext">3 / 4</div>
            <img src="slider3.jpg" alt="asd3" style={{ width: "100%" }} />
            <div className="text">Author</div>
          </div>

          <div className="mySlides">
            <div className="numbertext">4 / 4</div>
            <img src="slider3.jpg" alt="asd3" style={{ width: "100%" }} />
            <div className="text">Author</div>
          </div>

          <button className="prev" onClick={plusSlides(-1)}>
            ❮
          </button>
          <button className="next" onClick={plusSlides(1)}>
            ❯
          </button>
        </div>

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={currentSlide(1)}></span>
          <span className="dot" onClick={currentSlide(2)}></span>
          <span className="dot" onClick={currentSlide(3)}></span>
          <span className="dot" onClick={currentSlide(4)}></span>
        </div>
        <div>
          <h2>Convert your videos easily and freely</h2>
          <h5>Since 2021..</h5>
          <div>Image</div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
