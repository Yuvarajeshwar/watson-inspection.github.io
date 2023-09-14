import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { columns, rows } from './../utils/data'

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
export const updateReviewStatusById = (id, newReviewStatus) => {
  const index = rows.findIndex(row => row.id === id)

  if (index !== -1) {
    rows[index].reviewStatus = newReviewStatus
  } else {
    console.log(`Object with id ${id} not found.`)
  }
}

function Questionnaire({ questions, onSubmit, imageId }) {
  const [selectedOptions, setSelectedOptions] = useState({})
  const navigate = useNavigate()
  const filteredRow = rows.filter((row) => row.id === imageId.id)
  console.log(filteredRow)

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: selectedOption,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(selectedOptions)

    setSelectedOptions({})

    navigate('/')

    if(imageId.id === filteredRow[0].id) {
      updateReviewStatusById(filteredRow[0].id, 'Complete')
    }
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
