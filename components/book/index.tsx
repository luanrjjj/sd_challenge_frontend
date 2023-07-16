import React from 'react';
import { AiFillAmazonSquare, AiOutlineApple } from 'react-icons/ai';
import Image from 'next/image';

type BookProps = {
  // data: number[];
  image: string;
  title: string;
  description: string;
  author: string;
  rank: number;
  weeks_on_list: number;
  buy_links: any;
};


const Book: React.FC<BookProps> = ({
  image,
  title,
  description,
  author,
  rank,
  weeks_on_list,
  buy_links
}) => {

  return (
    <>

    </>
  )
}

export default Book;
