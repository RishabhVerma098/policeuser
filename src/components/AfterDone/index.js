import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./index.scss";
const useStyles = makeStyles(theme => ({
  root: {
    width: "50%",
    marginTop: "2rem",
    marginLeft: "5rem",
    backgroundColor: "null",
    fontSize: "10rem"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return ["Step 1", "Step 2", "Step 3"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div className="step1">
          <h5>Talk to ChatBot</h5>
          <div className="status">
            <p>Status</p>
            <p>Done</p>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="step2">
          <h5>PDF Creation and verify</h5>
          <div className="status">
            <p>Status</p>
            <p>InProgress</p>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="step3">
          <h5>Sign PDF</h5>
          <div className="status">
            <p>Status</p>
            <p>Unknown</p>
          </div>
        </div>
      );
    default:
      return "Unknown step";
  }
}

function StepScreen() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  return (
    <div className="stepScreen">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                <p className="stepLabel">{label}</p>
              </StepLabel>
              <StepContent>
                {getStepContent(index)}
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <div className="handleButtons">
              <Button className="proceed">Done</Button>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default StepScreen;

{
  /* <Typography>{getStepContent(index)}</Typography> */
}
