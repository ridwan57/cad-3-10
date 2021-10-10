import React from 'react'
import { SpanText, ColorTextFields } from './TextField'
import Grid from '@mui/material/Grid'
function ApplicantsRequirement () {
  const placeHolderName = 'Enter year here'
  const titleName = 'minimum'
  const width = '10rem'
  const props = { placeHolderName, titleName, width }
  const appReqData = [
    {
      spanText: 'SSC pass year for general boards:',
      textFieldsOne: {
        titleName: 'Minimum',
        placeHolderName: 'Enter year here'
      },
      textFieldsTwo: {
        titleName: 'Maximum',
        placeHolderName: 'Enter year here'
      }
    },
    {
      spanText: 'SSC pass year for BOU:',
      textFieldsOne: {
        titleName: 'Minimum',
        placeHolderName: 'Enter year here'
      },
      textFieldsTwo: {
        titleName: 'Maximum',
        placeHolderName: 'Enter year here'
      }
    },
    {
      spanText: 'Number of choices by an Applicant:',
      textFieldsOne: {
        titleName: 'Minimum',
        placeHolderName: 'Enter year here'
      },
      textFieldsTwo: {
        titleName: 'Maximum',
        placeHolderName: 'Enter year here'
      }
    },
    {
      spanText: 'Application fee:',
      textFieldsOne: {
        titleName: 'Amount',
        placeHolderName: 'Enter amount'
      }
      //   textFieldsTwo: {
      //     titleName: "Minimum",
      //     placeHolderName: "Enter year here",
      //   },
    },
    {
      spanText: 'Register fee:',
      textFieldsOne: {
        titleName: 'Amount',
        placeHolderName: 'Enter amount'
      }
      //   textFieldsTwo: { titleName: "Minimum", placeHolderName: "Enter year here" },
    }
  ]

  return (
    <Grid container spacing={3}>
      {appReqData.map(obj => {
        const { spanText, textFieldsOne, textFieldsTwo } = obj
        const text = spanText
        const propsOne = {
          placeHolderName: textFieldsOne.placeHolderName,
          titleName: textFieldsOne.titleName
        }
        const propsTwo = textFieldsTwo && {
          placeHolderName: textFieldsTwo.placeHolderName,
          titleName: textFieldsTwo.titleName
        }
        return (
          <>
            <Grid item xs={12} sm={5}>
              <SpanText text={text} />
            </Grid>
            <Grid item xs={12} sm={3.5}>
              <ColorTextFields {...propsOne} />
            </Grid>
            <Grid item xs={12} sm={3.5}>
              {textFieldsTwo && <ColorTextFields {...propsTwo} />}
            </Grid>
          </>
        )
      })}
    </Grid>
    // <div style={{ display: "flex", flexDirection: "column" }}>
    //   <div>
    //     <SpanText text="Hello" />
    //     <ColorTextFields {...props} />
    //     <ColorTextFields {...props} placeHolderName="Enter your cgpa" />
    //   </div>
    //   <div>
    //     <SpanText text="Hello" />
    //     <ColorTextFields {...props} />
    //     <ColorTextFields {...props} placeHolderName="Enter your cgpa" />
    //   </div>
    //   <div>
    //     <SpanText text="Hello" />
    //     <ColorTextFields {...props} />
    //     <ColorTextFields {...props} placeHolderName="Enter your cgpa" />
    //   </div>
    // </div>
  )
}

export default ApplicantsRequirement
