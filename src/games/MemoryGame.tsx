import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

interface Card {
  id: number;
  value: number;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const values = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    const shuffled = values.sort(() => Math.random() - 0.5);
    const newCards = shuffled.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(newCards);
    setFlippedCards([]);
    setMoves(0);
    setIsComplete(false);
  };

  const handleCardPress = (cardId: number) => {
    if (flippedCards.length === 2 || cards[cardId].isMatched) return;

    const newCards = [...cards];
    newCards[cardId].isFlipped = true;
    setCards(newCards);

    if (flippedCards.length === 0) {
      setFlippedCards([cardId]);
    } else {
      setFlippedCards([...flippedCards, cardId]);
      setMoves(moves + 1);

      // Check for match
      const firstCard = cards[flippedCards[0]];
      const secondCard = cards[cardId];

      if (firstCard.value === secondCard.value) {
        newCards[flippedCards[0]].isMatched = true;
        newCards[cardId].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);

        // Check if game is complete
        if (newCards.every(card => card.isMatched)) {
          setIsComplete(true);
        }
      } else {
        // No match - flip cards back
        setTimeout(() => {
          newCards[flippedCards[0]].isFlipped = false;
          newCards[cardId].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.moves}>Moves: {moves}</Text>
        <TouchableOpacity style={styles.resetButton} onPress={initializeGame}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {cards.map(card => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              (card.isFlipped || card.isMatched) && styles.cardFlipped
            ]}
            onPress={() => handleCardPress(card.id)}
            disabled={card.isFlipped || card.isMatched}
          >
            <Text style={styles.cardText}>
              {(card.isFlipped || card.isMatched) ? card.value : '?'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {isComplete && (
        <View style={styles.completeMessage}>
          <Text style={styles.completeText}>
            Congratulations! You completed the game in {moves} moves!
          </Text>
        </View>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 60) / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  moves: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 5,
  },
  cardFlipped: {
    backgroundColor: '#4CAF50',
  },
  cardText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  completeMessage: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  completeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MemoryGame;