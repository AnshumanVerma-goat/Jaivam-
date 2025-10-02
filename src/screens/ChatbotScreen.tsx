import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, FlatList, View } from 'react-native';
import { chatbotData } from '../data/sampleData';
import { COLORS } from '../constants/theme';

const ChatbotScreen = () => {
    const [activeQuestion, setActiveQuestion] = useState<any>(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Jaivam AI Assistant</Text>
                <Text style={styles.subtitle}>Select a question to get an instant answer.</Text>
            </View>
            <FlatList
                data={chatbotData}
                keyExtractor={(item) => item.question}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.questionCard} onPress={() => setActiveQuestion(item)}>
                        <Text style={styles.questionText}>{item.question}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingHorizontal: 20 }}
            />
            {activeQuestion && (
                <View style={styles.answerContainer}>
                    <Text style={styles.answerTitle}>{activeQuestion.question}</Text>
                    <Text style={styles.answerText}>{activeQuestion.answer}</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setActiveQuestion(null)}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9F9F9' },
    header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#EEE' },
    title: { fontSize: 32, fontWeight: 'bold', color: COLORS.primary },
    subtitle: { fontSize: 16, color: COLORS.gray, marginTop: 4 },
    questionCard: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 10, marginVertical: 8, borderWidth: 1, borderColor: '#EEE' },
    questionText: { fontSize: 16, fontWeight: '500', color: COLORS.text },
    answerContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 25, borderTopLeftRadius: 20, borderTopRightRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 10, },
    answerTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary, marginBottom: 10, },
    answerText: { fontSize: 16, color: COLORS.text, lineHeight: 24, },
    closeButton: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20, },
    closeButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold', },
});

export default ChatbotScreen;