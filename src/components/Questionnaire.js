import React, { useState } from 'react';
import styled from '@emotion/styled'

// Styled components
const QuestionnaireContainer = styled.div`
  text-align: left;
  padding: 20px;
`

const QuestionHeader = styled.h2`
  color: white;
`

const QuestionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: white;
`

const OptionLabel = styled.label`
  color: white;
  display: block;
  margin-bottom: 10px;
  font-size: 1rem;
`

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`

function Questionnaire({ questions, onSubmit }) {
  const [selectedOptions, setSelectedOptions] = useState({})

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: selectedOption,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedOptions)

    setSelectedOptions({});
  }

  return (
    <QuestionnaireContainer>
      <QuestionHeader>Meter Inspection Form</QuestionHeader>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id}>
            <QuestionTitle>{question.text}</QuestionTitle>
            <div>
              {question.options.map((option) => (
                <OptionLabel key={option.id}>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option.id}
                    checked={selectedOptions[question.id] === option.id}
                    onChange={() =>
                      handleOptionChange(question.id, option.id)
                    }
                  />
                  {option.text}
                </OptionLabel>
              ))}
            </div>
          </div>
        ))}
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </QuestionnaireContainer>
  );
}

export default Questionnaire
