import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

const score = 95;

const scoreStyle =
  score > 94 ? 'tableBody__scoreVeryHigh' : 'tableBody__scoreVeryLow';

const manuscripts = () => {
  return (
    <>
      <TableContainer>
        <Table className="table">
          <TableHead>
            <TableRow className="tableHeader">
              <TableCell className="tableHeader__cell table__title">
                Title
              </TableCell>
              <TableCell className="tableHeader__cell">Author Name</TableCell>
              <TableCell align="center" className="tableHeader__cell">
                AI Score
              </TableCell>
              <TableCell className="tableHeader__cell">Genre</TableCell>
              <TableCell className="tableHeader__cell">Valuation</TableCell>
              <TableCell className="tableHeader__cell">Readability</TableCell>
              <TableCell className="tableHeader__cell">Structure</TableCell>
              <TableCell
                className="tableHeader"
                sx={{ minWidth: '80px' }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="tableBody__title">
                The Seer of the Isle
              </TableCell>
              <TableCell className="tableBody__author">Enid Blyton</TableCell>
              <TableCell
                align="center"
                className={`tableBody__score ${scoreStyle}`}
              >
                {score}
              </TableCell>
              <TableCell>Crime</TableCell>
              <TableCell>$45,000</TableCell>
              <TableCell>Good</TableCell>
              <TableCell>Three Acts</TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary">
                  QUICK REPORT
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <style>
        {`
        .table{
          width: 100%;
        }

        .tableHeader{
          border-bottom: 3px solid #E27D60;
        }

        .tableHeader__cell{
          color: #E27D60;
        }

        .table__title{
          width: 200px;
        }

        .tableBody__title{
          font-weight: 600;
        }
        
        .tableBody__author{
          color: #5BC0DE;
          text-decoration: underline;
          cursor: pointer;
        }

        .tableBody__score{
          font-weight: 600;
        }

        .tableBody__scoreVeryHigh{
          color: #024E1B;
        }
        .tableBody__scoreVeryLow{
          color: #FFFFFF;
        }
      `}
      </style>
    </>
  );
};

export default manuscripts;
