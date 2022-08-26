import Head from 'next/head';
import Services from './Services';
import About from './About';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <div className=''></div>
      <section id='home' className='bg-blue-400 h-screen'>
        <h1 className=''>Home</h1>
        <h2 className='text-center text-3xl font-bold'>
          Sesame snaps tart lemon drops gummi bears donut brownie wafer cotton
          candy jelly. Sweet roll sweet jujubes toffee tootsie roll ice cream
          chocolate bar. Cupcake caramels fruitcake. Croissant sweet roll
          marzipan toffee. Halvah candy brownie muffin bear claw croissant.
          Marshmallow apple pie cupcake chocolate cake dessert cake. Lollipop
          lollipop tootsie roll. Brownie gummi bears cheesecake marshmallow.
          Donut sweet roll brownie pudding tiramisu croissant chocolate. Wafer
          chocolate pastry jujubes gingerbread jujubes. Donut cookie danish
          sweet croissant caramels gingerbread.
        </h2>
      </section>
      <Head />
      <About />
      <Services />
      <Contact />
    </>
  );
}
