import { useState } from "react";

const Section = ({ title, description, uper, setupper }) => {
  return (
    <div className="border border-gray-950  ">
      <div className=" p-2 m-1 border border-black">
        <h1 className="text-2xl">{title}</h1>
        {uper ? (
          <button
            className=" px-2 border border-black rounded-xl"
            onClick={() => {
              setupper(true);
            }}
          >
            Hide
          </button>
        ) : (
          <button
            className="px-2  border border-black rounded-xl cursor-pointer"
            onClick={() => {
              setupper(false);
            }}
          >
            Show
          </button>
        )}
      </div>
      {uper && <p className=" p-2 m-1 bg-white text-black">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [upper, setupper] = useState({
    aboutus: false,
    contactus: false,
    carrersection: false,
  });
  return (
    <>
      <Section
        title={"About Us"}
        description={`What is Lorem Ipsum
        Why do we use it
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        Where can I get some
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a`}
        uper={upper.aboutus}
        setupper={() =>
          setupper({
            aboutus: true,
            contactus: false,
            carrersection: false,
          })
        }
      />
      <Section
        title={"Contact Us"}
        description={`What is Lorem Ipsum
        Why do we use it
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        Where can I get some
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a`}
        uper={upper.contactus}
        setupper={() =>
          setupper({
            aboutus: false,
            contactus: true,
            carrersection: false,
          })
        }
      />
      <Section
        title={"Carrer Section"}
        description={`What is Lorem Ipsum
        Why do we use it
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        Where can I get some
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a`}
        uper={upper.carrersection}
        setupper={() =>
          setupper({
            aboutus: false,
            contactus: false,
            carrersection: true,
          })
        }
      />
    </>
  );
};
export default Instamart;
