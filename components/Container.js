// create a container component

export default function Container({ children }) {
  return <div className='max-w-[1600px] mx-auto'>{children}</div>;
}
