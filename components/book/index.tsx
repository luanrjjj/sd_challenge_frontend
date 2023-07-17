import React from 'react';
import { AiFillAmazonSquare, AiOutlineApple } from 'react-icons/ai';
import Image from 'next/image';
import { BookContainer } from './styles';

interface BookProps {
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
    <BookContainer>
      <div className="book-content">
        <div className="book-image">
          <Image src={image} alt={title} width={150} height={150}/>
        </div>
        <div className="book-information">
          <h2>{title}</h2>
            {/* <span>{`by ${author} `}</span> */}
          <div className="book-description">
            <span>{description}</span>
          </div>
          <div>
            <p><b>Author:</b> {' '} {author}</p>
            <p><b>Rank:</b> {' '} {rank}</p>
            <p><b>Weeks on list:</b>{' '} {weeks_on_list}</p>
          </div>
          <div className="book-buy-links">
          {buy_links.map((link: any) => (
              <div key={link.name}>
                {link.name === 'Amazon' && (
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <AiFillAmazonSquare size={30} color={link.name === 'Amazon' ? '#FF9900' : '#000'}/>
                  </a>
                )}
                {link.name === 'Apple Books' && (
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <AiOutlineApple size={30} color={link.name === 'Apple Books' ? '#FFF' : '#000'}/>
                  </a>
                )}
              </div>
          ))}
          </div>
        </div>
      </div>


    </BookContainer>
  )
}

export default Book;
