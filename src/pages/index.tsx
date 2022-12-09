import { Box, Button, Container, Stack, TextField } from '@mui/material'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import BlankLayout from '../components/layouts/BlankLayout'
import { addPost, getPosts } from './api/PostApi'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState('')
  const queryClient = useQueryClient()

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  const addPostMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      console.log('addPostMutation onSuccess')
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('title:', title, 'body: ', body, 'userId: ', userId)

    addPostMutation.mutate({ title: title, body: body, userId: userId })

    setTitle('')
    setBody('')
    setUserId('')
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return (
      <>
        <h2>Error!</h2>
        <h2>{error?.message}</h2>
      </>
    )
  }

  return (
    <div>
      <Container fixed>
        <Box
          component="form"
          autoComplete="off"
          padding={3}
          onSubmit={handleSubmit}
        >
          <Stack spacing={2}>
            <TextField
              required
              id="title"
              label="title"
              value={title}
              onInput={(e) => setTitle(e.target.value)}
            />
            <TextField
              required
              id="body"
              label="body"
              value={body}
              onInput={(e) => setBody(e.target.value)}
            />
            <TextField
              required
              id="userId"
              label="userId"
              value={userId}
              onInput={(e) => setUserId(e.target.value)}
            />
          </Stack>
          <Button type="submit" variant="outlined">
            submit
          </Button>
        </Box>

        {posts?.map((post: any) => (
          <Grid key={post.id} item xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {post.body}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.body}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Container>
    </div>
  )
}

Page.getLayout = function getLayout(page) {
  return <BlankLayout>{page}</BlankLayout>
}

export default Page
