import React from 'react';

const Aboutme = () => {
  return (
    <div className="container">
      <div className="grid grid-flow-col pt-14 pb-20">
        <div className="col-span-6 pr-20">
          <h4 className='text-3xl uppercase'>Information About me</h4>
          <p className='p-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet labore nihil obcaecati consequatur. Debitis error doloremque,
            vero eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
            delectus dolore fugiat exercitationem a,
            ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Harum non necessitatibus deleniti eum soluta.
          </p>
          <div className="btn-con">
            <a href="#" className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon"><i className="fas fa-download"></i></span>
            </a>
          </div>
        </div>
        <div className="col-span-6">
          <div className="grid grid-flow-col gap-8">
            <div className="col-span-6 border rounded-md transition duration-500 ease-in-out">
              <div className="p-6 flex">
                <p className="text-4xl font-semibold">650+</p>
                <p className="relative uppercase pl-12 text-xl before:absolute before:left-0 before:top-16 before:w-8 before:h-2">Projects <br /> Completed</p>
              </div>
            </div>
            <div className="col-span-6 border rounded-md transition duration-500 ease-in-out">
              <div className="p-6 flex">
                <p className="text-4xl font-semibold">10+</p>
                <p className="relative uppercase pl-12 text-xl before:absolute before:left-0 before:top-16 before:w-8 before:h-2">Years of <br /> experience</p>
              </div>
            </div>
            <div className="col-span-6 border rounded-md transition duration-500 ease-in-out">
              <div className="p-6 flex">
                <p className="text-4xl font-semibold">300+</p>
                <p className="relative uppercase pl-12 text-xl before:absolute before:left-0 before:top-16 before:w-8 before:h-2">Happy <br /> Clients</p>
              </div>
            </div>
            <div className="col-span-6 border rounded-md transition duration-500 ease-in-out">
              <div className="p-6 flex">
                <p className="text-4xl font-semibold">400+</p>
                <p className="relative uppercase pl-12 text-xl before:absolute before:left-0 before:top-16 before:w-8 before:h-2">Customer <br /> reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme