# $addMediaGallery

`$addMediaGallery` creates a **media gallery** component. Media galleries hold and display multiple images and videos. Use `$addMediaGalleryItem` to add items to the gallery. Media galleries can go inside containers.

---

## Syntax

```
$addMediaGallery[ID;(Container ID)]
```

- `ID`: a name to identify this gallery. Use this ID in `$addMediaGalleryItem` to add items.
- `Container ID`: optional ID of the container to put this gallery inside.

---

## What happens

1. `$addMediaGallery` creates an empty gallery with the given ID.
2. You add images or videos to it with `$addMediaGalleryItem`.
3. The gallery displays all items you added.

---

## Example 1: Gallery with images

```
$addMediaGallery[gallery]
$addMediaGalleryItem[https://example.com/img1.png;Photo one;;gallery]
$addMediaGalleryItem[https://example.com/img2.png;Photo two;;gallery]
$addMediaGalleryItem[https://example.com/img3.png;Photo three;;gallery]
```

**Result:**

![Media gallery with images example](../images/addMediaGallery-1.png)

What happens:

1. `$addMediaGallery` creates a gallery.
2. Three `$addMediaGalleryItem` calls add images to the gallery.

The gallery shows all three images.

---

## Example 2: Gallery with mixed media

```
$addMediaGallery[media]
$addMediaGalleryItem[https://example.com/screenshot.png;Screenshot;;media]
$addMediaGalleryItem[https://example.com/clip.mp4;Video clip;;media]
```

**Result:**

![Media gallery with mixed media example](../images/addMediaGallery-2.png)

What happens:

1. `$addMediaGallery` creates a gallery.
2. Two `$addMediaGalleryItem` calls add an image and a video to the gallery.

The gallery displays both the image and the video.

---

## Common uses

- **Showing multiple images** in a single gallery component
- **Displaying media collections** like screenshots or album covers
- **Mixing images and videos** in one gallery

---

## See also

- [$addMediaGalleryItem](../display/$addMediaGalleryItem.md): to add items to the gallery
- [$addContainer]($addContainer.md): to create a container for the gallery
