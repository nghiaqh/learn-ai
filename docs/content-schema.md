# Content types

## I. System content types

### User

- **Properties**: id, username, email, password, confirmed, blocked
- **Relationship**: user has many roles

### Permission

- **Properties**: id, type, controller, action, enabled, policy
- **Relationships**: permission belongs to many roles

### Role

- **Properties**: id, name, description, type
- **Relationships**:
  - role belongs to many users
  - role has many permissions

## II. Domain content types

## Artist

Artist represents mangaka, illustrator, comics artist

- **Properties**: id, name, biography, type, avatar
- **Relationships**:
  - artist has many one-shots
  - artist has many series

## One-shot

One-shot is a single, self-contained story or book that is not part of a series

- **Properties**: id, title, description, type, thumbnail
- **Relationships**:
  - one-shot has many artists
  - one-shot has many chapters

## Series

Series (manga, comics) is an art work depecting stories in multiple volumes

- **Properties**: id, title, description, type, thumbnail, status
- **Relationships**:
  - series has many artists
  - series has many volumes
  - series has many chapters

## Volume

- **Properties**: id, title, description, thumbnail
- **Relationships**:
  - volume belongs to 1 series
  - volume has many chapters

## Chapter

- **Properties**: id, title, description, thumbnail
- **Relationships**:
  - chapter belongs to 1 series
  - chapter belongs to 1 volume

## Image

- **Properties**: id, uri, title, number, thumbnail
- **Relationships**:
  - image belongs to 1 chapter
  - image belongs to 1 volume
  - image belongs to 1 series

## Demographic

- **Properties**: id, name
- **Relationships**:
  - demographic has many series
  - demographic has many one-shot

## Genre

- **Properties**: id, name
- **Relationships**:
  - genre has many series
  - genre has many one-shot
