import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import CameraAltIcon from "@mui/icons-material/CameraAlt";

interface IPart {
  partNo: string;
  partName: string;
  customer: string;
  model: string;
  cost: number;
  leadTime: number;
  stamp: number;
  weld: number;
  arcweld: number;
  plate: number;
  boxStd: number;
}

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [partNo, setPartNo] = useState<IPart>({} as IPart);
  const [isStream, setIsStream] = useState<boolean>(false);
  const [dataScan, setDataScan] = useState<string>("");

  return (
    <>
      <Typography variant="h3">Scanner Linear Barcode Page</Typography>

      <Box>
        <Accordion
          expanded={isStream}
          onChange={() => setIsStream(!isStream)}
          style={{
            marginBottom: "5px",
            marginTop: "10px",
          }}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#ffffff", display: "none" }}
          />
          <br />
          <AccordionDetails>
            {isStream ? (
              <>
                <Grid container justifyContent={"center"}>
                  <Grid item sm={3} xs={12} container justifyContent={"center"}>
                    {/* <BarcodeScannerComponent
                      width={640}
                      height={400}
                      onUpdate={(_, result) => {
                        if (result) {
                          handleScan(result.getText())
                        }
                      }}
                      delay={300}
                    /> */}
                  </Grid>
                </Grid>
              </>
            ) : (
              <></>
            )}
          </AccordionDetails>
        </Accordion>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2} width={"98%"} margin={2}>
            <Grid item xs={12} sm={12}>
              <Switch
                checked={isStream}
                onChange={(event) => {
                  setIsStream(event.target.value ? !isStream : isStream);
                }}
                name="gilad"
              />
              <label style={{ fontSize: "14px" }}>
                Active Camera{" "}
                <CameraAltIcon style={{ verticalAlign: "middle" }} />
              </label>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="scanner"
                value={dataScan}
                label="scanner"
                onChange={(e) => {
                  setDataScan(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                sx={{ mt: 1, width: "100%" }}
                onClick={() => {
                  setDataScan("");
                  setIsShow(false);
                }}
              >
                Clear Value
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default App;
