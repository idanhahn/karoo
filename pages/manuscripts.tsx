import React from 'react';
import { useRouter } from 'next/router';
import prisma from '../lib/prisma';
import { getSession } from '@auth0/nextjs-auth0';
import Loader from '../components/Loader';
import Upload from '../components/Upload';
import { dialogClasses } from '@mui/material';

const Manuscripts = ({ manuscripts }: { manuscripts: any }) => {
  const router = useRouter();

  if (manuscripts.length === 0) {
    return <Upload />;
  }

  if (manuscripts.length === 1) {
    return (
      <div>
        <div>In Manuscript length == 1</div>
        <Loader />
      </div>
    );
  }

  if (manuscripts.length > 1) {
    return <div>Multiple Manuscripts</div>;
  }

  return <div></div>;
};

export async function getServerSideProps({ req, res, params }: any) {
  const session = await getSession(req, res);
  const email = session?.user?.email;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
    include: {
      manuscripts: {
        where: {
          active: true,
        },
      },
    },
  });

  const manuscripts = JSON.parse(JSON.stringify(user?.manuscripts));

  if (manuscripts.length > 0) {
    return {
      redirect: {
        destination: `/manuscript/${manuscripts[0].id}`,
      },
    };
  }

  return {
    props: { manuscripts },
  };
}

export default Manuscripts;
