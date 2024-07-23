// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useMyTickets } from '@/api/hooks/support/hooks';




// export default function BasicTable() {
//     const {myTickets,isLoading}=useMyTickets({page:1,per_page:3})
//     console.log(myTickets?.mySupportTickets?.data)
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 250 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{color:'black',fontSize:'16px'}}>Token Id</TableCell>
//             <TableCell  sx={{color:'black',fontSize:'16px'}}>Priority</TableCell>
//             <TableCell  sx={{color:'black',fontSize:'16px'}}>Subject</TableCell>  
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {myTickets?.mySupportTickets?.data.map((row: { name: React.Key | null | undefined; ticket_id: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; priority: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; subject: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
             
//               <TableCell sx={{color:'black',fontSize:'14px'}}>{row.ticket_id}</TableCell>
//               <TableCell  sx={{color:'black',fontSize:'14px'}}>{row.priority}</TableCell>
//               <TableCell sx={{color:'black',fontSize:'14px'}}>{row.subject}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { useMyTickets } from '@/api/hooks/support/hooks';
import { supportSchema } from '@/api/hooks/support/schema';

export default function BasicTable() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 4;
 
  const { myTickets, isLoading,refetch } = useMyTickets({ page: currentPage,per_page: rowsPerPage });

  const handlePageChange = (event: any, page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  console.log(myTickets)
  const ticketData = myTickets?.mySupportTickets?.data || [];
//   const totalPages = myTickets?.mySupportTickets?.to; 
  const totalPages = Math.ceil((myTickets?.totalTickets) / rowsPerPage);

  React.useEffect(()=>{
    refetch()
  },[currentPage])
  return (
    <>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 250,borderRadius:'20px',overflow:'hidden' }} aria-label="simple table">
          <TableHead sx={{bgcolor:'#16a6df'}}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontSize: '16px',fontWeight:'bolder' }}>Token Id</TableCell>
              <TableCell sx={{ color: 'white', fontSize: '16px' ,fontWeight:'bolder' }}>Priority</TableCell>
              <TableCell sx={{ color: 'white', fontSize: '16px',fontWeight:'bolder'  }}>Subject</TableCell>
              <TableCell sx={{ color: 'white', fontSize: '16px',fontWeight:'bolder'  }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{height:'15rem'}}>
            {ticketData?.map((row:supportSchema,index:number) => (
              <TableRow key={index} >
                <TableCell sx={{ color: 'black', fontSize: '14px' }}>#{row.ticket_id}</TableCell>
                <TableCell sx={{ color: 'black', fontSize: '14px' }}>{row.priority}</TableCell>
                <TableCell sx={{ color: 'black', fontSize: '14px' }}>{row.subject}</TableCell>
                <TableCell sx={{ color: 'black', fontSize: '14px' }}>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
      <div style={{ textAlign: 'center', marginTop: '10px',color:'black' }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
          shape="rounded"
          sx={{
            
            '& .MuiPagination-ul': {
              color: 'black', 
            },
            '& .MuiButtonBase-root-MuiPaginationItem-root':{
              color:'black'
            },
            
            bgcolor:'#1976d2',
            display:'flex',
            justifyContent:'center'
          }}
        />
      </div>
    </>
  );
}
