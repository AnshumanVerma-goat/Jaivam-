import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { faqData } from '../data/sampleData';
import { COLORS } from '../constants/theme';

const ChatbotScreen = () => {
    const [messages, setMessages] = useState([{ text: 'Hello! I am your farming assistant. Ask me a question from the list below.', isUser: false }]);
    
    const handleQuestionSelect = (question) => {
        const userMessage = { text: question, isUser: true };
        
        const faqItem = faqData.find(item => item.question.toLowerCase() === question.toLowerCase());
        const botResponse = { text: faqItem ? faqItem.answer : "I'm sorry, I don't have an answer for that right now.", isUser: false };

        setMessages(prev => [...prev, userMessage, botResponse]);
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
        >
            <FlatList
                data={messages}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.messageBubble, item.isUser ? styles.userBubble : styles.botBubble]}>
                        <Text style={item.isUser ? styles.userText : styles.botText}>{item.text}</Text>
                    </View>
                )}
                contentContainerStyle={styles.messageList}
            />
            <View style={styles.inputContainer}>
                <Text style={styles.suggestionHeader}>Select a question:</Text>
                <FlatList
                    data={faqData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.question}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.suggestionChip} onPress={() => handleQuestionSelect(item.question)}>
                            <Text style={styles.suggestionText}>{item.question}</Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{ paddingVertical: 10 }}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F0F4F8' },
    messageList: { padding: 10 },
    messageBubble: {
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
        maxWidth: '80%',
    },
    userBubble: {
        backgroundColor: COLORS.primary,
        alignSelf: 'flex-end',
    },
    botBubble: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    userText: { color: '#FFFFFF', fontSize: 16 },
    botText: { color: '#333333', fontSize: 16 },
    inputContainer: { 
      paddingHorizontal: 10, 
      paddingBottom: 20, 
      borderTopWidth: 1, 
      borderTopColor: '#E0E0E0',
      backgroundColor: '#FFFFFF'
    },
    suggestionHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.gray,
        marginTop: 10,
        marginLeft: 5,
    },
    suggestionChip: {
        backgroundColor: '#E3F2FD',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    suggestionText: {
        color: COLORS.primary,
        fontWeight: '600',
    }
});

export default ChatbotScreen;
