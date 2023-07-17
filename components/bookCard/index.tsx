import React from 'react';
import { AiFillAmazonSquare, AiOutlineApple } from 'react-icons/ai';
import Image from 'next/image';
import { BookCardContainer } from './styles';
import { Tooltip } from 'react-tooltip';

interface BuyLink {
  name: string;
  url: string;
}

interface BookCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  rank: number;
  weeks_on_list: number;
  buy_links: BuyLink[];
}

const BookCard: React.FC<BookCardProps> = ({
  image,
  title,
  description,
  author,
  rank,
  weeks_on_list,
  buy_links
}) => {

  const descriptionTreated = description?.length > 120 ? description.substring(0, 100) + "..." : description;

  return (
    <BookCardContainer key={`${title}-${rank}`}>
      <div className="book-card-content" >
        <div className="image-book">
          <Image src={image} alt={title} width={300} height={300} priority/>
        </div>
        <h2>{title}</h2>
        <div className="book-card-description">
          <span data-tooltip-id="tooltip-field-description" data-tooltip-content={description}>{descriptionTreated}</span>
          <Tooltip style={{maxWidth: 300}} id="tooltip-field-description" />
        </div>
        <div className="book-card-details">
          <p><b>Author:</b> {' '} {author}</p>
          <p><b>Rank:</b> {' '} {rank}</p>
          <p><b>Weeks on list:</b>{' '} {weeks_on_list}</p>
        </div>
        <div className="book-card-buy-links">
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
    </BookCardContainer>
  )
}

export default BookCard;
