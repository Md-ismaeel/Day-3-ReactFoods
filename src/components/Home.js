import React from "react";
import "../Style/home.css";
import Profile from "./Profile";
// import Profile
import image1 from "../Assets/photo-1583608205776-bfd35f0d9f83.avif";

const list = [
  {
    name: `Jeff Bezos`,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg/330px-Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.`,
  },
  {
    name: `Richard Branson`,
    imageUrl: `https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQP-GxeVL2sKJLRWn90KbkkBVQQ12xm_k7rC9tlwWWKOIFVGXlv`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.`,
  },
  {
    name: `Jack Ma`,
    imageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg/330px-Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.`,
  },
  {
    name: `Elan Musk`,
    imageUrl: `https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg`,
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.`,
  },
  {
    name: `Mark Zuckerberg`,
    imageUrl: `https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT0TxcBW8h4nl9vEBFI7nNsP6uJpognh6XSKqEJ4Hp6fKhqctnht_rbyPvEeoAFTIofGJc5sEufkiX0WNI`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!`,
  },
  {
    name: `Oprah Winfrey`,
    imageUrl: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8hj_cnA3k-DfIbb_LxkV7-WakFtavtw_PFmnpC_6NnDKqk7Vm`,
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.`,
  },
];

function Home() {
  return (
    <>
      <section className="sec1-container">
        <div className="box">
          <div
            style={{ fontSize: "2rem", fontWeight: 800, textAlign: "center" }}
          >
            <h1>Let us find your</h1>
            <h1 style={{ color: "#E11D48", marginTop: "-1rem" }}>
              Forever Food.
            </h1>
          </div>
          <p
            style={{ fontSize: "18px", marginTop: "1rem", textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="btn-box">
            <button id="btn1">Search Now</button>
            <button id="btn2">Know more</button>
          </div>
        </div>
      </section>

      <section className="sec2-container">
        <div className="left-side">
          <img src={image1} id="c-home-img" alt="sec-Image" />
        </div>
        <div className="right-side">
          <h1 style={{ fontSize: "30px", fontWeight:"700" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "25px",
              letterSpacing: "0.5px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <button id="get-touch-btn">Get in touch</button>
        </div>
      </section>

      <section className="sec3-container">
        {list.map((items, index) => {
          return (
            <Profile
              key={index}
              description={items.desc}
              names={items.name}
              imageName={items.imageUrl}
            />
          );
        })}
      </section>
    </>
  );
}

export default Home;
