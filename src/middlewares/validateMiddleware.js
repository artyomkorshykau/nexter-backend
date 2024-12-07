import { validationResult } from 'express-validator'

export const validationHandler = ( req, res, next ) => {
  
  const errors = validationResult( req )
  
  if ( !errors.isEmpty() ) {
    
    const formattedErrors = errors.errors.reduce( ( acc, error ) => {
      
      acc[ error.path ] = error.msg
      return acc
      
    }, {} )
    
    return res.status( 400 ).json( { errors: formattedErrors } )
  }
  
  next()
  
}