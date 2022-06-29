import { useState } from "react";
import { cards } from "../../../data/content/android/cards";
import { ProgressCard } from "../ProgressCard/ProgressCard";
import {
  StyledProgressCardsWrapper,
  StyledCardsTitle,
  StyledProgressCards,
} from "./StyledProgressCards";

export const ProgressCards = () => {
  const [cardVisited, setCardVisited] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  const handleCardClick = (e: any) => {
    const target = e.currentTarget;
    setSelectedCard(target.id);
  };

  return (
    <StyledProgressCards data-testid="progress-cards">
      <StyledProgressCardsWrapper>
        <StyledCardsTitle>Skills & Experience</StyledCardsTitle>
        {cards.map((card) => (
          <ProgressCard
            cardTitle={card.title}
            cardBodyText={card.text}
            key={card.id}
            visited={cardVisited}
            cardActive={selectedCard === card.id}
            id={card.id}
            handleCardClick={handleCardClick}
            selectedCard={selectedCard}
          />
        ))}
      </StyledProgressCardsWrapper>
    </StyledProgressCards>
  );
};
