import ListCard from './ListCard';
import Wrapper from './bits/Wrapper';

function ListView({ products }) {
  return (
    <Wrapper fluid className='flex-[75%] grid grid-cols-1 gap-y-[3rem] '>
      {products?.map((item) => (
        <ListCard key={item.id} {...item} />
      ))}
    </Wrapper>
  );
}

export default ListView;
