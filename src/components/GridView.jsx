import GridCard from './GridCard';
import Wrapper from './bits/Wrapper';

const GridView = ({ products }) => {
  return (
    <Wrapper
      as={'ul'}
      fluid
      className='flex-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[3rem] gap-y-[3rem] '
    >
      {products?.map((item) => (
        <GridCard key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

export default GridView;
